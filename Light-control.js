import React, {useEffect, useState, useRef} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {LightSensor} from 'expo-sensors';

const LOW_THRESHOLD = 100;
const HIGH_THRESHOLD = 300;
const TIMEOUT_DURATION = 2000;
const UPDATE_INTERVAL = 16.67;

const COLORS = {
    BLACK: 'black',
    WHITE: 'white',
};

const LightControl = () => {
    const [lightData, setLightData] = useState(0);
    const [currentColor, setCurrentColor] = useState(COLORS.WHITE);
    const lastChangeTimeRef = useRef(0);

    useEffect(() => {
        let timeoutId;

        const handleLightChange = ({illuminance}) => {
            setLightData(illuminance);
            handleColorTransition(illuminance);
        };

        function setTransitionTimeout() {
            timeoutId = setTimeout(() => {
                setCurrentColor(
                    currentColor === COLORS.BLACK ? COLORS.WHITE : COLORS.BLACK
                );
                lastChangeTimeRef.current = Date.now();
            }, TIMEOUT_DURATION);
        }

        const handleColorTransition = (illuminance) => {
            const highIlluminance = illuminance > HIGH_THRESHOLD;
            const lowIlluminance = illuminance < LOW_THRESHOLD;

            const currentTime = Date.now();
            const timeSinceLastChange = currentTime - lastChangeTimeRef.current;

            if (
                (currentColor === COLORS.BLACK && highIlluminance) ||
                (currentColor === COLORS.WHITE && lowIlluminance)
            ) {
                if (timeSinceLastChange >= TIMEOUT_DURATION) {
                    setCurrentColor(COLORS.BLACK);
                    setTransitionTimeout();
                }
            }
        };

        LightSensor.addListener(handleLightChange);
        LightSensor.setUpdateInterval(UPDATE_INTERVAL);

        return () => {
            LightSensor.removeAllListeners();
            clearTimeout(timeoutId);
        };
    }, [currentColor]);

    const calculateBackgroundColor = () => {
        return currentColor;
    };

    return (
        <View style={[styles.container, {backgroundColor: calculateBackgroundColor()}]}>
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
