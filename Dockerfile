
FROM node:18-alpine as build

# تحديد مجلد العمل داخل الحاوية
WORKDIR /app

# نسخ ملفات التعريف وتثبيت المكتبات
COPY package*.json ./
RUN npm install

# نسخ باقي ملفات المشروع وبناء النسخة النهائية
COPY . .
RUN npm run build

# المرحلة الثانية: تشغيل السيرفر (Production Stage)
# نستخدم Nginx لأنه خفيف وسريع جداً لعرض المواقع
FROM nginx:alpine

# نسخ ملفات الموقع الجاهزة (dist) من المرحلة الأولى إلى Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# نسخ إعدادات السيرفر (التي سننشئها الآن)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# فتح المنفذ 80
EXPOSE 3000

# أمر التشغيل
CMD ["nginx", "-g", "daemon off;"]
