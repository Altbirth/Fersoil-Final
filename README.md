# FersoilApp-ReactNative

You need VS Code and Expo Go in Playstore

step 1 : React Native requires Node.js for its runtime and package management. Download and install it from the Node.js website. Choose the LTS (Long Term Support) version.

Download and paste this into CMD or powershell
# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 22

# verifies the right Node.js version is in the environment
node -v # should print `v22.11.0`

# verifies the right npm version is in the environment
npm -v # should print `10.9.0`

Then open the terminal and type these:
Backend {
    pip install flask
    pip install flask-cors
    pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
    python -c "import torch; print(torch.__version__)"
    pip install flask
    pip install flask_cors



}

Then open the terminal and type these:
expo install expo-linear-gradient
expo install expo-image-picker
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context
expo install @expo/vector-icons
expo install expo-image-picker

after use split terminal.
Use one terminal to Run cd Backend then run "Python App.py"
Use the another terminal to run "npx expo start"


Using your mobile phone. Download Expo Go in Google Playstore
Run the App then find the Scan QR Code. 
Find the QR code where you run the "npx expo start". 
Scan that Code using your Mobile Phone to run the Fersoil Mobile App
