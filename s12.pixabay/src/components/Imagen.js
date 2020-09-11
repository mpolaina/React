import React from 'react';
const Imagen = ({imagen}) => {
    
    // Extraer las variables
    const { largeImageURL, likes, previewURL, tags, views } = imagen
  
    return (  
        
        // <div className='col-12 col-sm6 col-md-4 col-lg-4 mb-4'>
        //     <div className='card'>
        //         <img src={previewURL} alt={tags} className='card-img-top' />
        //     </div>
        //     <div className='card-body'>
        //         <p className='card-text'>{likes} Me gusta</p>
        //         <p className='card-text'>{views} Visitas</p>
        //     </div>
        //     <div className='card-footer'>
        //         <a 
        //           href={largeImageURL}
        //           target='_blank'
        //           rel='noopener noreferrer'
        //           className='btn btn-primary'
        //         >
        //           Ver Imagen
        //         </a>
        //     </div>
        // </div>
        
        
        <div className="w-auto m-3 rounded overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover object-center" src={previewURL} alt={tags}/>
            <div className="px-6 py-3 flex justify-end">
                <span className="w-auto inline-flex bg-gray-200 rounded-full px-3 py-2 text-xs font-semibold text-gray-700 ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {likes}
                </span>
                <span className="w-auto inline-flex bg-gray-200 rounded-full px-3 py-2 text-xs font-semibold text-gray-700 mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                  {views}
                </span>
                <button className="
                w-auto flex justify-end text-xs rounded-full
                bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
                      <a 
                        href={largeImageURL}
                        target='_blank'
                        rel='noopener noreferrer'
                        className=''
                      > Ver </a>
                </button>
            </div>
        </div>
    );
}
 
export default Imagen;