# **vMix Multiview Custom Overlay**
🚀 A fully customizable Multiview solution for **vMix**, powered by **Node.js** and **WebSockets**. This tool allows you to display real-time input states with dynamic borders, timers, and full transparency, directly integrated into **vMix Web Browser Input**.

---

## **🔧 Features**
- 📺 **Real-time input status** (active & preview)
- 🎛️ **Custom Multiview layout options** (4 or 9 inputs)
- 🔄 **Dynamic input arrangement** based on URL parameters
- 💡 **Full transparency support**, perfect for vMix overlays
- 🔌 Built with **Node.js**, **Express**, and **WebSockets** for live data synchronization

---

## **🚀 Installation & Setup**

### **Prerequisites**
- **Node.js** (v16 or later)
- **vMix** installed and running
- **Enable API in vMix settings** (`Settings > Web Controller > Enable API`)

### **Steps**
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vMix-dashboard.git
   cd vMix-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node server.js
   ```

4. **Access the Multiview layouts**  
   - Open **vMix** and create a **Web Browser Input**  
   - Use one of the following URLs:  
     - **Multiview 4 Inputs:**  
       ```
       http://localhost:3000/multiview-4.html
       ```
     - **Multiview 9 Inputs:**  
       ```
       http://localhost:3000/multiview-9.html
       ```

---

## **🔧 URL Customization**
You can modify the URL to set the starting input for your Multiview.

### **Example:**
```
http://localhost:3000/multiview-9.html?start=3
```
This will display the input number `3` as the first entry in the Multiview.

---

## **💻 Usage Example**

- **Start the server:**  
   ```bash
   node server.js
   ```  
- **Access the Multiview via Web Browser Input:**  
   Example URL:  
   ```
   http://localhost:3000/multiview-9.html?start=2
   ```

---

## **💬 Feedback and Contributions**
We welcome feedback, issues, and pull requests!  
If you have any ideas for improvements or bugs to report, feel free to open an issue on GitHub.

---

**🎬 Created for professional live productions with vMix. Enjoy customizing your Multiview! 🚀**
