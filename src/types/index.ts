import { NavigatorScreenParams } from '@react-navigation/native';

export interface Visit {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  address1: string;
  address2: string;
  description: string;
  time: string;
  condition?: string;
  photos: string[];
  brand?: string;
  model?: string;
  licensePlate?: string;
  engine?: string;
  gas?: string;
  vin?: string;
  year?: string;
}

export interface RepairTask {
  id: number;
  name: string;
  description: string;
  status?: string;
}

export interface Repair {
  id: number;
  licensePlate: string;
  time: string;
  tasks: RepairTask[];
  photos?: string[];
}

export interface User {
  username: string;
  password: string;
}

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

export type VisitsStackParamList = {
  UpcomingVisits: undefined;
  VisitDetails: { visit: Visit };
  VehicleDetails: { visit: Visit };
  VehicleCondition: { visit: Visit };
  Camera: { visit: Visit };
  PhotoPreview: { image: string; visit: Visit };
};

export type RepairsStackParamList = {
  UpcomingRepairs: undefined;
  RepairDetails: { repair: Repair };
  RepairNotes: { repair?: Repair };
  Camera: { repair: Repair };
  PhotoPreview: { image: string; repair: Repair };
};

export type MainDrawerParamList = {
  VisitsStack: NavigatorScreenParams<VisitsStackParamList>;
  RepairsStack: NavigatorScreenParams<RepairsStackParamList>;
};

export type StackParamList = VisitsStackParamList & RepairsStackParamList & RootStackParamList;
