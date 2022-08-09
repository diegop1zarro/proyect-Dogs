import React from 'react';
import '../../css/style.css'
export default function footbar() {
  return (
    <div>

<div className="container my-5">
  <footer
          className="text-center text-lg-start text-white"
          style={{"background-color": "#929fba"}}
          >
    <div className="container p-4 pb-0">
      <section className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p>
             Nuestra página brinda plantillas de e-commerce totalmente interactivas que puedes usar en tu negocio
             o empresa y así poder llevarla a otro nivel
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Te puede interesar</h6>
            <p>
              <a className="text-white">COMO FUNCIONA</a>
            </p>
            <p>
              <a className="text-white">PREGUNTAS FRECUENTES</a>
            </p>
            <p>
              <a className="text-white">NUESTROS PRECIOS</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> Córdoba, Argentina</p>
            <p><i className="fas fa-envelope mr-3"></i> PageofPage@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Siguenos</h6>

            {/* <!-- Facebook --> */}
            <a
               className="btn btn-primary btn-floating m-1"
               style={{"background-color": "#3b5998"}}
               href="#!"
               role="button"
               ><i className="fab fa-facebook-f fa-lg"></i>
               </a>

            {/* <!-- Twitter --> */}
            <a
               className="btn btn-primary btn-floating m-1"
               style={{"background-color": "#55acee"}}
               href="#!"
               role="button"
               ><i className="fab fa-twitter"></i>
              </a>

            {/* <!-- Google --> */}
            <a
               className="btn btn-primary btn-floating m-1"
               style={{"background-color": "#dd4b39"}}
               href="#!"
               role="button"
               ><i className="fab fa-google"></i>
               </a>

            {/* <!-- Instagram --> */}
            <a
               className="btn btn-primary btn-floating m-1"
               style={{"background-color": "#ac2bac"}}
               href="#!"
               role="button"
               ><i className="fab fa-instagram"></i>
              </a>

            {/* <!-- Linkedin --> */}
            <a
               className="btn btn-primary btn-floating m-1"
               style={{"background_color": "#0082ca"}}
               href="#!"
               role="button"
               ><i className="fab fa-linkedin-in"></i>
              </a>
            {/* <!-- Github --> */}
            <a
               className="btn btn-primary btn-floating m-1"
               style={{"background-color":"#333333"}}
               href="#!"
               role="button"
               ><i className="fab fa-github"></i>
              </a>
          </div>
        </div>
      </section>
    </div>
  </footer>
</div>

    </div>
  )
}
