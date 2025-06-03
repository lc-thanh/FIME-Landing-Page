import { useEffect, useRef } from "react";

export const LatestPublication = ({ publication }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current.querySelector("iframe");
      if (iframe) {
        iframe.style.border = "none";
        iframe.style.overflow = "hidden";
        iframe.style.width = "100%";
        iframe.style.height = "auto";
        iframe.style.aspectRatio = "16/9";
      }
    }
  }, [publication.embed_code]);

  if (!publication || !publication.embed_code) {
    return null; // Render nothing if publication or embed_code is not available
  }

  return (
    <section className="feature-area-five bgc-lighter pt-100 pb-70">
      <div className="container">
        <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-10">Ấn phẩm mới nhất</span>
          <h2>{publication.title}</h2>
        </div>
        <div>
          {/* <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/fitmediahaui/videos/1224055816008338%2F&show_text=false&width=560&t=0"
            style={{
              border: "none",
              overflow: "hidden",
              width: "100%",
              height: "auto",
              aspectRatio: "16/9",
            }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe> */}
          <div
            dangerouslySetInnerHTML={{ __html: publication.embed_code }}
            ref={iframeRef}
          />
        </div>
      </div>
    </section>
  );
};
