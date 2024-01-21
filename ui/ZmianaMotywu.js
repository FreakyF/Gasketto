import React, {useEffect, useState} from "react";
import { LightSensor } from 'expo-sensors';

const [illuminance, setilluminance] = useState(0);
const aktywnystyl = illuminance > 25 ? styles : Darkstyles ;

LightSensor.addListener(data => { setilluminance(data.illuminance)})
