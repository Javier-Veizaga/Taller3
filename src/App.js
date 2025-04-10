import React, { Suspense, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CSpinner, useColorModes } from '@coreui/react';
import './scss/style.scss';
import './scss/examples.scss';

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const Login = React.lazy(() => import('./views/pages/login/Login'));
const RegisterUser = React.lazy(() => import('./views/pages/registerUser/RegisterUser'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const RegisterProveedor = React.lazy(() => import('./views/pages/registerproveedor/RegisterProveedor'));
const Personal = React.lazy(() => import('./views/pages/personal/personal'));
const TurnosLaborales = React.lazy(() => import('./views/pages/tunosLaborales/TurnosLaborales'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme');
  const storedTheme = useSelector((state) => state.theme);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0];
    if (theme) {
      setColorMode(theme);
    }
    if (isColorModeSet()) {
      return;
    }
    setColorMode(storedTheme);
  }, [isColorModeSet, setColorMode, storedTheme]);

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          {/* Rutas que NO utilizan el DefaultLayout */}
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route exact path="/registerUser" name="RegisterUser Page" element={<RegisterUser />} />
          <Route exact path="/registerProveedor" name="RegisterProveedor Page" element={<RegisterProveedor />} />
          <Route path="/personal" name="Personal" element={<Personal />} /> 
          <Route path="/turnosLaborales" name="turnosLaborales page" element={<TurnosLaborales/>}/>

          {/* Rutas que SÍ utilizan el DefaultLayout */}
          <Route path="*" name="Home" element={<DefaultLayout />}>
            {/* Aquí puedes agregar otras rutas que también deben tener el menú lateral */}
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;