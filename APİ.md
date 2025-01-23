## 🔑 API Anahtarı Kullanımı

Bu proje, NASA API'lerinden veri almak için bir API anahtarı gerektirir. Varsayılan olarak, NASA'nın ücretsiz `DEMO_KEY` anahtarı kullanılır. Ancak, kendi API anahtarınızı ekleyerek sınırsız erişim sağlayabilirsiniz.

### **1. NASA API Anahtarı Alma**

- [https://api.nasa.gov/] adresine giderek bir hesap oluşturun ve API anahtarınızı alın.

### **2. Anahtarınızı Projeye Ekleyin**

API anahtarınızı projeye eklemek için aşağıdaki adımları izleyin:

#### Yöntem

1. `.env` dosyasını oluşturun ve `VITE_API_KEY` adında bir değişken ekleyin.
2. `VITE_API_KEY` değişkenini kendi API anahtarınızla değiştirin.

---

---

---

---

---

## 🔑 API Key Usage

This project requires an API key to fetch data from NASA APIs. By default, NASA's free `DEMO_KEY` is used. However, you can provide your own API key for unlimited access.

### **1. Obtain a NASA API Key**

- Go to [https://api.nasa.gov/] to create an account and obtain your API key.

### **2. Add Your Key to the Project**

To add your API key to the project, follow these steps:

#### Method

1. Create the `.env` file and add a variable named `VITE_API_KEY`.
2. Replace the line `const apiKey = "DEMO_KEY";` with your own API key.
