import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => {
  return (
    <>
      <div className="my-2">
        <Carousel infiniteLoop={true} interval={3000} autoPlay={true}>
          <div className="h-100">
            <img
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="PICTURE 1"
            />
          </div>
          <div className="h-100">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/054/876/032/small/mirror-image-snow-capped-mountain-peaks-reflected-in-pristine-lake-free-photo.jpg"
              alt="PICTURE 2"
            />
          </div>
          <div className="h-100">
            <img
              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              alt="PICTURE 3"
            />
          </div>
          <div className="h-100">
            <img
              src="https://media.istockphoto.com/id/500593190/photo/composition-finger-frame-mans-hands-capture-the-sunset.jpg?s=612x612&w=0&k=20&c=S7cuvvC_hlu39Fj5jon6__3DD0j265aAsqvYX4C0lEM="
              alt="PICTURE 1"
            />
          </div>
          <div className="h-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJBvfLlDsK0M66mVKTlJ2SJBECvkp3qKKyQKp6sxbJFCCWhICVxg3AGFR&s=10"
              alt="PICTURE 2"
            />
          </div>
          <div className="h-100">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/042/105/964/small/ai-generated-woman-in-pilots-uniform-posing-for-picture-free-photo.jpeg"
              alt="PICTURE 3"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default App;
