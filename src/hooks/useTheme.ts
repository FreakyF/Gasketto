import { LightSensor } from 'expo-sensors';
import { useEffect, useRef, useState } from 'react';

const LOW_THRESHOLD = 100;
const HIGH_THRESHOLD = 300;
const TIMEOUT_DURATION = 2000;
const UPDATE_INTERVAL = 2000;

export const useTheme = () => {
    const [illuminance, setIlluminance] = useState(0);
    const [isDark, setIsDark] = useState(false);

    const isDarkRef = useRef(false);
    const lastChangeTimeRef = useRef(Date.now());

    useEffect(() => {
        const subscription = LightSensor.addListener((data) => {
            const currentIlluminance = data.illuminance;
            setIlluminance(currentIlluminance);

            const currentTime = Date.now();
            const timeSinceLastChange = currentTime - lastChangeTimeRef.current;

            if (timeSinceLastChange >= TIMEOUT_DURATION) {
                if (!isDarkRef.current && currentIlluminance < LOW_THRESHOLD) {
                    setIsDark(true);
                    isDarkRef.current = true;
                    lastChangeTimeRef.current = currentTime;
                }
                else if (isDarkRef.current && currentIlluminance > HIGH_THRESHOLD) {
                    setIsDark(false);
                    isDarkRef.current = false;
                    lastChangeTimeRef.current = currentTime;
                }
            }
        });

        LightSensor.setUpdateInterval(UPDATE_INTERVAL);

        return () => subscription.remove();
    }, []);

    return { isDark, illuminance };
};
