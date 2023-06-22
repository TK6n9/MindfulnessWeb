import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import CardList from "../component/CardList";
import CardList2 from "../component/CardList2";
import CardList3 from "../component/CardList3";
import "./index.css";

const images = [
  {
    src: "./1111.jpg",
    text: "우리 이 어디 싶이 위하여서. 꾸며 얼마나 있는 살 이것은 청춘 있는가? 못할 넣는 위하여, 커다란 길지 있으며, 만물은 있으랴? 천지는 인간은 아니더면, 보이는 않는 아니다.",
    textPosition: {
      width: "50%",
      position: "absolute",
      top: "80%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
  },
  {
    src: "./2222.jpg",
    text: "트고, 풀밭에 피에 하여도 열락의 가는 쓸쓸하랴? 무엇을 생생하며, 창공에 투명하되 더운지라 부패뿐이다. 같은 커다란 고동을 있는 놀이 할지니, 끓는 오아이스도 있으랴?",
    textPosition: {
      width: "50%",
      position: "absolute",
      top: "20px",
      left: "20px",
      textAlign: "center",
    },
  },
  {
    src: "./3333.jpg",
    text: "뜨거운지라, 이상이 쓸쓸한 눈에 싸인 구하지 무엇이 끓는다. 풍부하게 어디 가슴이 심장은 낙원을 길지 미인을 풀이 사막이다. 새가 천하를 눈이 끝에 부패를 천자만홍이 불러 못하다 있으랴?",
    textPosition: {
      width: "50%",
      position: "absolute",
      bottom: "20px",
      right: "20px",
      textAlign: "center",
    },
  },
];
const imageDuration = 7000; // 이미지 전환 간격 (7초)
const fadeDuration = 2; // 이미지 페이드 인/아웃 시간 (2초)

function MainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, imageDuration);

    return () => clearInterval(interval);
  }, []);
  const currentImage = images[currentIndex];
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const cardListRef = useRef(null);
  const cardListRef2 = useRef(null);
  const cardListRef3 = useRef(null);

  const handleScroll = () => {
    if (cardListRef.current) {
      const rect = cardListRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        cardListRef.current.classList.add("slide-up");
      } else {
        cardListRef.current.classList.remove("slide-up");
      }
    }
  };
  const handleScroll2 = () => {
    if (cardListRef2.current) {
      const rect = cardListRef2.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        cardListRef2.current.classList.add("slide-up");
      } else {
        cardListRef2.current.classList.remove("slide-up");
      }
    }
  };
  const handleScroll3 = () => {
    if (cardListRef3.current) {
      const rect = cardListRef3.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        cardListRef3.current.classList.add("slide-up");
      } else {
        cardListRef3.current.classList.remove("slide-up");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll2);
    window.addEventListener("scroll", handleScroll3);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll2);
      window.removeEventListener("scroll", handleScroll3);
    };
  }, []);

  return (
    <>
      <Box position="relative" minHeight="500px" height="44.44vw">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: index === currentIndex ? 1 : 0,
              transition: `opacity ${fadeDuration}s ease`,
            }}
          />
        ))}
        <Text fontSize="md" color="white" {...currentImage.textPosition}>
          {currentImage.text}
        </Text>
        <Flex position="absolute" bottom="24px" right="48px" align="center">
          <Icon
            as={ArrowBackIcon}
            w={5}
            h={5}
            onClick={goToPreviousImage}
            color="white"
            mr={"12px"}
            style={{ cursor: "pointer" }}
          />
          <Icon
            as={ArrowForwardIcon}
            w={5}
            h={5}
            onClick={goToNextImage}
            color="white"
            style={{ cursor: "pointer" }}
          />
        </Flex>
      </Box>
      <div ref={cardListRef} className="hidden">
        <Element name="cardList" className="card-list">
          <CardList />
        </Element>
      </div>
      <div
        ref={cardListRef2}
        className="hidden"
        style={{ background: "rgb(248 247 243)" }}
      >
        <Element name="cardList" className="card-list">
          <CardList2 />
        </Element>
      </div>
      <div ref={cardListRef3} className="hidden">
        <Element name="cardList" className="card-list">
          <CardList3 />
        </Element>
      </div>
      <Divider />
    </>
  );
}

export default MainPage;
