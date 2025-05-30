---
layout: post
title: Coin2USB Manual
lang: en
translation: /details/coin2usb-manual-zh
---

# Coin2USB User Manual

## I. Product Introduction
coin2usb is a smart adapter that converts coin signals into USB keyboard outputs, suitable for coin-operated entertainment devices and countdown control scenarios. The device supports multiple functions including coin counting, countdown timer, customizable keys, and system information display, featuring easy operation and intuitive display.

## II. Hardware Interface Description
- **COIN_PIN**: Electronic coin acceptor pulse signal input
- **COIN_S_INPUT**: Mechanical coin button input
- **LED_BUILTIN**: Working indicator light
- **TRIGGER_OUT_PIN**: Output trigger signal when coins are inserted
- **LED_CLK_PIN / LED_DIO_PIN**: Digital tube display interface
- **KEY_UP_PIN / KEY_DOWN_PIN / KEY_SET_PIN / KEY_MODE_PIN**: Function key inputs

## III. Key Description
- **UP**: Scroll up menu/options, increase value
- **DOWN**: Scroll down menu/options, decrease value
- **SET**: Enter/confirm/save/test
- **MODE**: Switch main mode, return to upper menu

## IV. Digital Tube Display Description
- Displays total coins inserted, countdown time, menu items, key information, system information, etc.
- Main menu displays:
  - `s-b`: Coin button settings
  - `s-t`: Countdown settings
  - `s-s`: System information menu
  - `s-c`: Coin multiplier settings
- System menu displays:
  - `v2.0`: Firmware version number
  - Last 4 digits of chip ID (in hexadecimal)
  - `CLEA`: Clear total coin count

## V. Main Function Menus
1. **Coin Counting Mode**
   - Displays total coins inserted, automatically sends the set key with each coin
2. **Countdown Mode**
   - Starts countdown upon coin insertion, sends "r" key when countdown ends
   - Supports adding time with additional coins
3. **Settings Menu**
   - Customize coin button (supports numbers, letters, function keys, etc.)
   - Set countdown duration (30~5999 seconds)
   - System information (version number, chip ID, clear total coin count)

## VI. Operating Procedures
### 1. Switch Main Mode
- Press the MODE key to switch between "Coin Counting Mode" and "Countdown Mode"
- The current mode is remembered after power off

### 2. Enter Settings Menu
- In the main interface, press the SET key to enter the settings menu
- Use UP/DOWN keys to select `s-b` (key settings), `s-t` (countdown settings), `s-s` (system information), `s-c` (coin multiplier settings)
- Press SET to enter the corresponding submenu

### 3. Coin Button Settings
- Use UP/DOWN keys to switch selectable keys, the digital tube displays the key name
- Each time you switch, the key will be sent immediately for testing
- Press SET to save and return to the main menu

### 4. Countdown Duration Settings
- Use UP/DOWN keys to switch preset durations
- Press SET to save and return to the main menu

### 5. System Information Menu
- Use UP/DOWN keys to switch:
  - `v2.0` (version number)
  - Last 4 digits of chip ID
  - `CLEA` (clear total coin count)
- In the `CLEA` item, press the SET key to clear the total coin count, LED flashes three times as a reminder

### 6. Operations in Countdown Mode
- Inserting a coin starts the countdown, additional coins can be inserted to add time
- When the countdown ends, the "r" key is automatically sent
- Pressing the SET key during the countdown cancels the countdown and enters the settings menu

### 7. Coin Multiplier Settings
- After entering the `s-c` menu, use UP/DOWN keys to set "1~5 coins for 1 play", the digital tube displays "1PLy", "2PLy", etc.
- Press SET to save the settings and return to the main menu
- After setting, the key signal will only be sent once when the set coin count is reached

## VII. Troubleshooting and Precautions
- **No response to coins**: Please check the coin acceptor signal line connection and power supply
- **No USB output**: Please ensure the USB cable is securely connected and the driver is installed
- **Key not working**: Please check the key connection and function definition
- **Abnormal total coin count**: Can be reset to zero through the system menu "CLEA" item
- **Firmware upgrade**: Please contact the manufacturer for the latest firmware and upgrade method

---
For more questions, please contact technical support.