import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LightSensor } from 'expo-sensors';

const LOW_THRESHOLD = 100;
const HIGH_THRESHOLD = 300;
const TIMEOUT_DURATION = 2000;
const UPDATE_INTERVAL = 2000;

const COLORS = {
    BLACK: 'black',
    WHITE: 'white',
};

const LightControl = () => {
    const [lightData, setLightData] = useState(0);
    const [currentColor, setCurrentColor] = useState(COLORS.WHITE);
    const lastChangeTimeRef = useRef(Date.now());

    useEffect(() => {
        const handleLightChange = ({illuminance}) => {
            setLightData(illuminance);
            handleColorTransition(illuminance);
        };

        const handleColorTransition = (illuminance) => {
            const highIlluminance = illuminance > HIGH_THRESHOLD;
            const lowIlluminance = illuminance < LOW_THRESHOLD;
            const currentTime = Date.now();
            const timeSinceLastChange = currentTime - lastChangeTimeRef.current;

            if (
                (currentColor === COLORS.WHITE && highIlluminance) ||
                (currentColor === COLORS.BLACK && lowIlluminance)
            ) {
                if (timeSinceLastChange >= TIMEOUT_DURATION) {
                    setCurrentColor(currentColor === COLORS.WHITE ? COLORS.BLACK : COLORS.WHITE);
                    lastChangeTimeRef.current = currentTime;
                }
            }
        };

        LightSensor.addListener(handleLightChange);
        LightSensor.setUpdateInterval(UPDATE_INTERVAL);

        return () => {
            LightSensor.removeAllListeners();
        };
    }, [currentColor]);

    return (
        <View style={[styles.container, {backgroundColor: currentColor}]}>
            <Text style={styles.text}>Light Level: {lightData.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'red',
        fontSize: 24,
    },
});

export default LightControl;
