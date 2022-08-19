import React from 'react';

const Pdfformat = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
            crossOrigin="anonymous"
          />
        </head>
        <body style={{ padding: '0px', margin: '0px' }}>
          <div
            id="divToPrint"
            className="mt4"
            style={{
              color: '#000',
              backgroundColor: '#fff',
              width: '250mm',
              height: '450mm',
              minHeight: '297mm',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: '100px',
              fontSize: '13px',
              border: '1px solid #adb5bd',
            }}
          >
            <div className="row d-flex align-items-end justify-content-around">
              <div className="col d-flex justify-content-around">
                <h1>Analisis Nutricional</h1>
                <img
                  src="src/img/logominieduc.png"
                  alt="Alcaldia de medellín"
                />
              </div>
              <div className="row text-center mt-4">
                <h4>
                  Equipo de seguridad Alimentaria y nutricional de medellin -
                  ESAN
                </h4>
              </div>
            </div>

            <div className="row d-flex m-4">
              <div className="col d-flex align-items-start m">
                <label style={{ marginRight: '5px' }} htmlFor="modalidad">
                  <strong>Modalidad: </strong>
                </label>
                <p
                  id="modalidad"
                  style={{ border: '1px solid gray', padding: '0 10px' }}
                >
                  2
                </p>
                <p
                  id="modalidad"
                  style={{
                    border: '1px solid gray',
                    padding: '0 7px',
                    width: 'max-content',
                  }}
                >
                  RACION INDUSTRIALIZADA
                </p>
              </div>
              <div
                className="col d-flex align-items-start m"
                style={{ textAlign: 'center' }}
              >
                <label style={{ marginRight: '5px' }} htmlFor="menu">
                  <strong>Menú: </strong>
                </label>
                <p
                  id="menu"
                  style={{
                    border: '1px solid gray',
                    padding: '0 7px',
                    width: 'inherit',
                  }}
                >
                  Menú 1 LP7091
                </p>
              </div>
              <div
                className="col d-flex align-items-start m"
                style={{ textAlign: 'center' }}
              >
                <label style={{ marginRight: '5px' }} htmlFor="fecha">
                  <strong>Fecha: </strong>
                </label>
                <p
                  id="fecha"
                  style={{
                    border: '1px solid gray',
                    padding: '0 7px',
                    width: 'inherit',
                  }}
                >
                  11 jun 2022
                </p>
              </div>
            </div>
            <div className="row d-flex m-4">
              <div
                className="col d-flex align-items-start m"
                style={{ textAlign: 'center' }}
              >
                <label
                  style={{ marginRight: '5px', width: '180px' }}
                  htmlFor="modalidad"
                >
                  <strong>Grupo de Edad: </strong>
                </label>
                <p
                  id="modalidad"
                  style={{
                    border: '1px solid gray',
                    padding: '0 7px',
                    width: 'inherit',
                  }}
                >
                  4 - 8 AÑOS 11 Meses
                </p>
              </div>
              <div
                className="col d-flex align-items-start m"
                style={{ textAlign: 'center' }}
              >
                <label
                  style={{ marginRight: '5px', width: '186px' }}
                  htmlFor="modalidad"
                >
                  <strong>Grupo Étnia: </strong>
                </label>
                <p
                  id="modalidad"
                  style={{
                    border: '1px solid gray',
                    padding: '0 7px',
                    width: 'inherit',
                  }}
                >
                  SIN PERTENENCIA ETNICA
                </p>
              </div>
            </div>
            <div className="row d-flex m-4">
              <div
                className="col d-flex align-items-start m"
                style={{ textAlign: 'center' }}
              >
                <label style={{ marginRight: '5px' }} htmlFor="modalidad">
                  <strong>Departamento: </strong>
                </label>
                <p
                  id="modalidad"
                  style={{
                    border: '1px solid gray',
                    padding: '0 7px',
                    width: 'inherit',
                  }}
                >
                  Antioquia
                </p>
              </div>
              <div
                className="col d-flex align-items-start m"
                style={{ textAlign: 'center' }}
              >
                <label style={{ marginRight: '5px' }} htmlFor="modalidad">
                  <strong>Municipio: </strong>
                </label>
                <p
                  id="modalidad"
                  style={{
                    border: '1px solid gray',
                    padding: '0 7px',
                    width: 'inherit',
                  }}
                >
                  Medellin
                </p>
              </div>
            </div>
            <div className="row d-flex m-4">
              <div
                className="col d-flex align-items-start m"
                style={{ textAlign: 'center' }}
              >
                <label style={{ marginRight: '5px' }} htmlFor="modalidad">
                  <strong>Operador: </strong>
                </label>
                <p
                  id="modalidad"
                  style={{
                    border: '1px solid gray',
                    padding: '0 7px',
                    width: 'inherit',
                  }}
                >
                  UT PAE 2021
                </p>
              </div>
              <div
                className="col d-flex align-items-start m"
                style={{ textAlign: 'center' }}
              >
                <label style={{ marginRight: '5px' }} htmlFor="modalidad">
                  <strong>Otro: </strong>
                </label>
                <input
                  type="text"
                  style={{ width: 'inherit', background: 'white' }}
                />
              </div>
            </div>

            <div className="mt-5">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <div
                      className="row d-flex text-center"
                      style={{ width: '100%', marginLeft: 'initial' }}
                    >
                      <h4 style={{ border: '1px solid gray' }}>
                        YOGURT DE MORA
                      </h4>
                    </div>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alimento - Componente</td>
                    <td>Código</td>
                    <td>Peso N.</td>
                    <td>Calorías</td>
                    <td>Proteinas</td>
                    <td>Grasa</td>
                    <td>Cho</td>
                    <td>Calcio</td>
                    <td>Hierro</td>
                  </tr>
                  <tr>
                    <td>YOGURT ENTERO, CON DULCE - LECHE Y DEIVADOS</td>
                    <td>649-7</td>
                    <td>200.00</td>
                    <td>162</td>
                    <td>5,6</td>
                    <td>5,8</td>
                    <td>22,4</td>
                    <td>178</td>
                    <td>0,4</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <div
                      className="row d-flex text-center"
                      style={{ width: '100%', marginLeft: 'initial' }}
                    >
                      <h4 style={{ border: '1px solid gray' }}>
                        CROISSANT HOJALDRADO RELLENO DE CHOCOLATE
                      </h4>
                    </div>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alimento - Componente</td>
                    <td>Código</td>
                    <td>Peso N.</td>
                    <td>Calorías</td>
                    <td>Proteinas</td>
                    <td>Grasa</td>
                    <td>Cho</td>
                    <td>Calcio</td>
                    <td>Hierro</td>
                  </tr>
                  <tr>
                    <td>CROISSANT, HORNEADO - CEREALES Y DERIVADOS</td>
                    <td>649-7</td>
                    <td>200.00</td>
                    <td>162</td>
                    <td>5,6</td>
                    <td>5,8</td>
                    <td>22,4</td>
                    <td>178</td>
                    <td>0,4</td>
                  </tr>
                  <tr>
                    <td>CHOCOLATINA - PRODUCTOS AZUCARADOS</td>
                    <td>649-7</td>
                    <td>200.00</td>
                    <td>162</td>
                    <td>5,6</td>
                    <td>5,8</td>
                    <td>22,4</td>
                    <td>178</td>
                    <td>0,4</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <div
                      className="row d-flex text-center"
                      style={{ width: '100%', marginLeft: 'initial' }}
                    >
                      <h4 style={{ border: '1px solid gray' }}>
                        FRUTA GRUPO 1 - MANDARINA
                      </h4>
                    </div>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alimento - Componente</td>
                    <td>Código</td>
                    <td>Peso N.</td>
                    <td>Calorías</td>
                    <td>Proteinas</td>
                    <td>Grasa</td>
                    <td>Cho</td>
                    <td>Calcio</td>
                    <td>Hierro</td>
                  </tr>
                  <tr>
                    <td>MANDARINA, ZUMO - FRUTAS Y DERIVADOS</td>
                    <td>649-7</td>
                    <td>200.00</td>
                    <td>162</td>
                    <td>5,6</td>
                    <td>5,8</td>
                    <td>22,4</td>
                    <td>178</td>
                    <td>0,4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};
 export default Pdfformat;
