import styled from "styled-components";

export const ProductosServices = styled.section`
  width: 100%;
`;

export const ArticliGridProductos = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  .productos {
    padding: 1rem;
    width: 100%;
    height: 300px;

    display: flex;
    align-items: flex-end;

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    &:hover .infoProducts h4 {
      color: var(--colorRed);
      color: #f0f0f0f0;
    }

    &:hover .infoProducts span {
      color: var(--colorRed);
    }

    &:hover .infoProducts .pHidenShow {
      position: relative;
      bottom: 0;
    }

    .infoProducts {
      position: relative;
      overflow: hidden;
      h4 {
        color: #f0f0f0d3;
        font-size: 2.3em;
      }
      
      span {
        font-size: 1.5em;
        font-weight: 800;
        color: #f0f0f0aa;
      }
      
      .pHidenShow {
        position: relative;
        bottom: 300px;
        margin-top: 3rem;
        color: #f0f0f0aa;
        font-size: 1.5em;
        transition: 0.3s ease-in;
      }
    }

  }

  .productUno {
    background: linear-gradient(#00000031, black), url('https://images.pexels.com/photos/808510/pexels-photo-808510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    &:hover {
      background-size: 250%;
    }
  }

  .productDos {
    background: linear-gradient(#00000031, black), url('https://images.pexels.com/photos/1099217/pexels-photo-1099217.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
     &:hover {
      background-size: 134%;
    }
  }
  
  .productTres {
    background: linear-gradient(#00000031, black), url('https://images.pexels.com/photos/2113128/pexels-photo-2113128.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
     &:hover {
      background-size: 134%;
    }
  }

  .productCuatro {
    background: linear-gradient(#00000031, black), url('https://images.pexels.com/photos/259698/pexels-photo-259698.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
     &:hover {
      background-size: 134%;
    }
  }

  .productCinco {
    background: linear-gradient(#00000031, black), url('https://images.pexels.com/photos/191406/pexels-photo-191406.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
     &:hover {
      background-size: 134%;
    }
  }

  .productSeix {
    background: linear-gradient(#00000031, black), url('https://images.pexels.com/photos/2043739/pexels-photo-2043739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
     &:hover {
      background-size: 250%;
    }
  }
`;