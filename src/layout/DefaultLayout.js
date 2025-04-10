import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      {/* Aquí se renderiza el menú lateral */}
      {/* Probablemente utilizando un componente que itera sobre 'navigation' */}
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        {/* Aquí podría ir la barra de navegación superior */}
        <div className="body flex-grow-1">
          <AppContent />
          {/* Aquí se renderizará el contenido de tus páginas */}
        </div>
        <AppFooter />
        {/* Aquí podría ir el pie de página */}
      </div>
    </div>
  )
}

export default DefaultLayout
