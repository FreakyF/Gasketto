# Gasketto | React Native Automotive Workshop Assistant

A specialized mobile utility designed for automotive technicians to facilitate vehicle intake documentation, service workflow tracking, and high-fidelity photographic evidence collection.

## 📺 Demo & Visuals
*Visual representation of the system in operation.*

### 🔐 Authentication & Workflow Scheduling
*Technician identity verification and daily appointment prioritization.*

* **System Entry Point:**

![Login](/docs/screenshots/Login.png)

* **Service Queue & Scheduling:**

![Upcoming Visits](/docs/screenshots/Upcoming_Visits.png)

### 📋 Client Manifest & Intake Diagnostics
*Localized data retrieval and preliminary repair job initialization.*

* **Visit Manifest & Client Context:**

![Visit Details](/docs/screenshots/Visit_Details.png)

* **Vehicle Specification Ingestion:**

![Vehicle Data](/docs/screenshots/Vehicle_Data.png)

### 🚗 Repair Verification & Photographic Documentation
*State-based repair status updates and high-fidelity evidence collection for service validation.*

* **Repair Logic Verification:**

![Service Confirmation](/docs/screenshots/Service_Confirmation.png)

* **Physical State Assessment & Evidence Collection:**

![Condition Assessment](/docs/screenshots/Condition_Assessment.png)

![Evidence Collection](/docs/screenshots/Evidence_Collection.png)

## 🏗️ Architecture & Context
*High-level system design and mobile execution model.*

* **Objective:** Creation of a lightweight, offline-capable tool for mechanics to digitize the repair documentation process directly on the workshop floor.
* **Architecture Pattern:** Component-Based Architecture utilizing a decentralized state model managed via React Navigation’s stack persistence.
* **Data Flow:** User Input -> Component Local State -> Navigation Parameter Passing -> Asynchronous Persistence (`AsyncStorage`).

## ⚖️ Design Decisions & Trade-offs
*Technical justifications for MVP-scoped engineering choices.*

* **State Management: Ephemeral Navigation State**
    * **Context:** Requirement for a lightweight state transition model without the overhead of a centralized store for a linear workflow.
    * **Decision:** Utilization of Navigation Parameters combined with `AsyncStorage` for session persistence.
    * **Rationale:** Maximizes development velocity for a strictly sequential business logic (Intake -> Repair -> Summary) where cross-tree state sharing is minimal.
    * **Trade-off:** Accepted increased coupling between screens and higher difficulty in global state observability in exchange for reduced boilerplate and faster time-to-market.

* **UX: Hardware-Reactive Adaptive Theming**
    * **Context:** Variability in workshop lighting conditions requiring instant UI adaptability for readability.
    * **Decision:** Per-component ambient light sensor integration for granular style adjustments.
    * **Rationale:** Exploration of direct hardware-to-UI binding to allow individual screen elements to react independently to lighting shifts.
    * **Trade-off:** Acknowledged higher CPU/battery consumption due to multiple sensor listeners, prioritized over a centralized Context-based provider to test component-level reactive isolation.

## 🧠 Engineering Challenges
*Analysis of signal processing and hardware integration.*

* **Challenge: Asynchronous Sensor Signal Hysteresis**
    * **Problem:** Rapid fluctuations in ambient light sensor data (signal noise) caused "UI flickering" when the device was near the luminosity threshold, leading to a degraded user experience.
    * **Implementation:** Developed a debouncing logic layer and threshold-based gating within the render cycle. The implementation enforces a minimum 500ms stability window before triggering a theme transition.
    * **Outcome:** Achievement of smooth UI transitions and elimination of visual jitter, ensuring interface stability in environments with inconsistent artificial lighting.

## 🛠️ Tech Stack & Ecosystem
* **Core:** React Native (0.7x), Expo
* **Navigation:** React Navigation (Stack & Drawer)
* **Persistence:** AsyncStorage (Key-Value persistence for JSON-serialized manifests)
* **Hardware API:** Expo Sensors (Ambient Light Sensor)

## 🧪 Quality & Standards
* **Testing:** Exploratory testing conducted via Expo Go on physical Android/iOS devices to validate hardware sensor responsiveness.
* **Standards:** Adherence to a modular UI directory structure to promote component reusability across different service modules.
* **Observability:** Implementation of structured console auditing to track state transitions through the navigation stack.

## 🙋‍♂️ Authors

**Kamil Fudala**

- [GitHub](https://github.com/FreakyF)
- [LinkedIn](https://www.linkedin.com/in/kamil-fudala/)

**Jan Chojnacki**

- [GitHub](https://github.com/Jan-Chojnacki)
- [LinkedIn](https://www.linkedin.com/in/jan-chojnacki-772b0530a/)

**Jakub Babiarski**

- [GitHub](https://github.com/JakubKross)
- [LinkedIn](https://www.linkedin.com/in/jakub-babiarski-751611304/)

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).
