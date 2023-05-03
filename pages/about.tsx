import { NextPage } from "next";
import React from "react";
import Meta from "../components/Meta";
import aboutStyle from "../styles/About.module.css";

const about: NextPage = () => {
  return (
    <>
      <Meta title="About us" />
      <div className={aboutStyle.container}>
        <main>
          <h1>About us</h1>
          <img
            src="/images/about/about.jpg"
            alt="Labtop with code editor opened"
          />
          <h2>Our story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
            libero odio. Pellentesque sollicitudin nunc quis consequat dictum.
            Aliquam et laoreet ex. Morbi ac ligula id sem maximus dictum. In et
            tellus at velit tempor eleifend a sed massa. Fusce ac cursus arcu,
            in pharetra massa. Phasellus iaculis ante tortor, non eleifend
            libero rutrum non. Etiam suscipit aliquet eros, sit amet vehicula
            nunc dictum elementum. Sed semper, purus sed dignissim varius, arcu
            urna interdum justo, pellentesque facilisis nunc enim eget augue.
            Fusce dignissim, turpis in ultrices placerat, arcu quam blandit
            sapien, pretium tristique dolor tellus sodales diam. Sed id velit et
            dui dictum vulputate. Etiam finibus tortor finibus faucibus
            ullamcorper. Sed rutrum dignissim dictum. Nam aliquam purus
            ullamcorper, suscipit elit id, rutrum est. Duis eget neque elit. Ut
            efficitur tellus a urna venenatis ultricies.
            <br />
            <br />
            Nunc eu purus vehicula, dapibus lectus id, posuere leo. Sed
            imperdiet consectetur urna, at facilisis enim pulvinar id. Nulla vel
            erat vitae leo pretium mattis id vel nisi. Proin at nibh sit amet
            neque vestibulum cursus in in mi. Donec molestie diam eget urna
            imperdiet, id rutrum dui pulvinar. Proin in rhoncus odio. Vivamus
            ultricies magna vel lorem consequat, nec ultrices sapien
            consectetur. Praesent euismod magna eu libero venenatis faucibus.
            Mauris non ex vel leo fermentum hendrerit at luctus sem. Fusce
            tincidunt enim nec ex accumsan, in efficitur neque placerat. Aenean
            interdum ipsum id nunc luctus, nec pellentesque leo sollicitudin.
            Vivamus rutrum arcu iaculis porttitor accumsan. Suspendisse mi
            tellus, convallis in dolor non, faucibus pulvinar dui. Donec
            consequat sed elit et ullamcorper.
            <br />
            <br />
            Quisque et mauris rutrum, mollis ipsum semper, dignissim sapien.
            Curabitur sit amet ante dui. In pharetra suscipit arcu, vitae
            vehicula sapien pulvinar et. Quisque suscipit, metus sed varius
            maximus, metus sem rutrum nunc, at porttitor sem velit eu sapien.
            Pellentesque blandit turpis eget lacus placerat vehicula.
            Suspendisse at diam non leo placerat rutrum ullamcorper id augue.
            Suspendisse vitae ipsum laoreet neque molestie gravida. Aenean
            pretium vestibulum purus non dignissim. Morbi ullamcorper ante quis
            mattis laoreet. In vel magna pellentesque ipsum commodo sollicitudin
            quis ut erat.
          </p>
        </main>
      </div>
    </>
  );
};

export default about;
