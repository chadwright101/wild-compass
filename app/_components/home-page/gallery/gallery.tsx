import ContentWrapper from "@/app/_utils/content-wrapper";
import ThumbnailSlider from "./thumbnail-slider";

const GallerySlider = () => {
  return (
    <ContentWrapper>
      <div className="relative py-10 border-b border-grey/25 w-full">
        <h2 className="mb-8">Gallery</h2>
        {/* <ThumbnailSlider /> */}
        <ThumbnailSlider desktop />
        <ThumbnailSlider />
      </div>
    </ContentWrapper>
  );
};

export default GallerySlider;
