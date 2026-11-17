import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import guia from './guia.html?raw';
import { iniciarGuia } from './navegacion';
import Simulador from './Simulador';
import './guia.css';
import './simulador.css';

// Conserva los capítulos existentes y monta el simulador como componente React.
function Aplicacion() {
  useEffect(() => {
    iniciarGuia();
    createRoot(document.getElementById('simulador-narrativo')).render(<Simulador />);
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: guia }} />;
}

createRoot(document.getElementById('root')).render(<Aplicacion />);
