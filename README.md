# Prueba Técnica Red procesal (API)

_Gestión de empleados_

## Comenzando 🚀

_Para obtener una copia del proyecto en su máquina local use Git clone_

```
git clone https://github.com/jdcr1425/pruebaTecnicaRedProcesal.git
```


### Pre-requisitos 📋

_Nodejs 12.18.3 o más actual_

_Mysql 10.4.14-MariaDB o más actual_


### Instalación 🔧

_Ejecutar el script en el servidor de base de datos MYSQL. El script se encuentra en database/db.sql_

_Después de estar en la raiz del proyecto ejecutamos npm install para instalar las dependencias_
```
npm install
```
_Debemos configurar las variables de entorno:_

```
PORT
DB_HOST
DB_USER 
DB_PASSWORD
DB_NAME  
```

_Para ejecutar el servidor ejecutamos npm start_
```
npm start
```

_Ya después de esto deberiamos tener nuestro servidor escuhando peticiones_

### Rutas

#### Empleados

##### Post

```
http://[Server]/API/V1/employees
```
_Con esto crearemos un nuevo Empleado._ 

_Campos:_

nombres *
apellidos *
tipoIdentificacion [nit, cc] *
numeroIdentificacion *
correoElectronico
fechaIngreso
salarioMensual *

*Requerido

##### Get
```
http://[Server]/API/V1/employees
```
Con esto tendremos todos los empleados. 

##### Update

```
http://[Server]/API/V1/employees/<id>
```
Con esto actualizaremos un empleado. 

#### Télefonos

##### Post

_Con esto crearemos un nuevo télefono para un empleado._ 

```
http://[Server]/API/V1/telephones
```
_Campos:_

tipo [cell, tel]  : Cadena de texto *
numero  : Cadena de texto *
indicativo : Cadena de texto 
personaId : Id entero *

*Requerido

##### Get

```
http://[Server]/API/V1/telephones/<id_empleado>
```

_Con esto tendremos todos los télefonos de un empleado._

##### Delete

```
http://[Server]/API/V1/telephones/<id>
```

_Con esto borraremos un télefono de un empleado._

