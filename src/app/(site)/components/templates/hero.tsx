import Image from "next/image";
import Styles from "./hero.module.css"
import HeaderSection from "./header-section";

interface Props {
    content: string[];
    image: any;
    altText: string;
    blurData: "blur" | "empty" | undefined;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    textAlign: string;
    textColor: string;
    imageOverlayColor: any;
    imageHeight: any;
    fullImage: boolean;
}

export default function Hero({
    content,
    image,
    altText,
    blurData,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    textAlign,
    textColor,
    imageOverlayColor,
    imageHeight,
    fullImage
}: Props) {

    // const imageOverlay = {
    //     background:
    //         `rgba(${imageOverlayColor?.rgb?.r ?? '0'}, ${imageOverlayColor?.rgb?.g ?? '0'}, ${imageOverlayColor?.rgb?.b ?? '0'}, ${imageOverlayColor?.rgb?.a ?? '0.2'})`,
    // };

    return (
        <>
            {fullImage ?
                <Image
                    src={image}
                    alt={altText}
                    placeholder={blurData ? 'blur' : 'empty'}
                    blurDataURL={blurData}
                    width={1000}
                    height={1000}
                    className="w-full"
                    sizes="100vw"
                    priority={true}
                />
                :
                <div className={`relative isolate inset-0 ${imageHeight} flex items-center`}>
                    {image &&
                        <Image
                            src={image}
                            alt={altText}
                            placeholder={blurData ? 'blur' : 'empty'}
                            blurDataURL={blurData}
                            className={Styles.heroImage}
                            fill={true}
                            sizes="100vw"
                            priority={true}
                        />
                    }
                    {(content || primaryButtonLink || secondaryButtonLink) && (
                        <div className={`container ${Styles.heroInnerContainer}`}>
                            <div style={{
                                color: textColor
                            }}>

                                <HeaderSection
                                    content={content}
                                    textAlign={textAlign}
                                    // PRIMARY
                                    buttonLink={primaryButtonLink}
                                    primaryButtonText={primaryButtonText}
                                    primaryButtonStyle={primaryButtonStyle}
                                    // SECONDARY
                                    secondaryButtonLink={secondaryButtonLink}
                                    secondaryButtonText={secondaryButtonText}
                                    secondaryButtonStyle={secondaryButtonStyle}
                                />
                            </div>
                        </div>
                    )
                    }
                </div>
            }
        </>
    )
}