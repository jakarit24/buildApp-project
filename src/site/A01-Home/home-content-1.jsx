/*Home_Content_2*/
/*AOS aos-animate*/

export const Home_Content_1 = () => {
  return (
    <div class="row zone-z1">
      <div class="col-12 col-md-6">
        <div class="box-content z-left">
          <div class="card-content">
            <div class="card-title mb-24px">
              <h3>Title A</h3>
            </div>
            <div class="card-image mb-16px">
              <img
                src="/image/image-mock/blue370x270.png"
                srcset="/image/image-mock/blue370x270.png 110w, /image/image-mock/blue370x270.png 360w"
                sizes="(max-width: 767.8px) 110px, (min-width: 768px) 360px"
                alt="Title 1"
                class="card-content-img"
              />
            </div>
            <div class="card-des mb-16px max-w80p">
              Lorem ipsum dolor sit amet, consectur dolori
              Lorem ipsum dolor sit amet, consectur dolori
              Lorem ipsum dolor sit amet, consectur dolori
              Lorem ipsum dolor sit amet, consectur dolori
            </div>
            <div class="card-btn">
              {" "}
              <button id="z1-btn-l" class="btn btn-sdc" btn-name="z1-btn-l">
                {" "}
                Join A{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="box-content z-right">
          <div class="card-content">
            <div class="card-title mb-24px">
              <h3>Title B</h3>
            </div>
            <div class="card-image mb-16px">
              <img
                src="/image/image-mock/blue370x270.png"
                srcset="/image/image-mock/blue370x270.png 110w, /image/image-mock/yellow370X270.png 360w"
                sizes="(max-width: 767.8px) 110px, (min-width: 768px) 360px"
                alt="Title 1"
                class="card-content-img"
              />
            </div>
            <div class="card-des mb-16px max-w80p">
              Lorem ipsum dolor sit amet, consectur dolori
              Lorem ipsum dolor sit amet, consectur dolori
              Lorem ipsum dolor sit amet, consectur dolori
              Lorem ipsum dolor sit amet, consectur dolori
            </div>
            <div class="card-btn">
              {" "}
              <button id="z1-btn-l" class="btn btn-sdc bgff9900" btn-name="z1-btn-l">
                {" "}
                Join B{" "}
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
export default Home_Content_1;
