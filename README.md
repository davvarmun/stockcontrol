# StockControl
# CLONAR EL REPOSITORIO

```bash
git clone https://github.com/davvarmun/stockcontrol.git
cd stockcontrol
```

## BACKEND

1. Instalar Java (Recomendado 21, 17 funciona también).

2. Instalar MySQL:
   - Descargar MySQL Installer desde el sitio web oficial de MySQL.
   - Ejecutar el installer y seleccionar la opción **MySQL Server**.
   - Seguir el asistente de instalación. Asegúrese de establecer una contraseña root.
   - Después de la instalación, asegúrese de que MySQL se está ejecutando:
     ```bash
     mysql -u root -p
     ```
     Ingrese su contraseña de root cuando se le solicite.

3. Crear la base de datos y usuario:
   - Ingrese en MySQL:
     ```bash
     mysql -u root -p
     ```
     - Introduzca la contraseña root y ejecute los siguientes comandos SQL:
     ```sql
     CREATE DATABASE stockcontrol_db;
     CREATE USER 'spring_user_sc'@'localhost' IDENTIFIED BY 'SeVilla-2003';
     GRANT ALL PRIVILEGES ON stockcontrol_db.* TO 'spring_user_sc'@'localhost';
     FLUSH PRIVILEGES;
     EXIT;
     ```

4. Abrir PowerShell en el directorio `stockcontrol` o en VSC.

5. Ejecutar el siguiente comando para construir y lanzar el backend:
   ```bash
   .\mvnw spring-boot:run
   ```

## FRONTEND

1. Instalar Node.js desde el sitio web oficial.

2. Verificar la instalación:
   ```bash
   node -v
   npm -v
   ```

3. Instalar dependencias:
   - Abrir el directorio `frontend`:
     ```bash
     cd frontend
     ```
   - Instalar dependencias:
     ```bash
     npm install
     ```

4. Instalar Expo CLI:
   ```bash
   npm install -g expo-cli
   ```

5. Iniciar el servidor:
   ```bash
   npm expo start --web
   ```

