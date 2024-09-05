import ContentEditor from "../util/content-editor";
import { ctaData } from "../../../../../sample/data";
import Link from "next/link";
import Image from "next/image";

interface Props {
    content: string;
    backgroundStyles: any;
    altText: string;
    blurData: string;
    buttonLink: any;
    secondaryButtonLink: any;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonStyle: any;
    secondaryButtonText: string;
    paddingTop?: string,
    paddingBottom?: string
    image?: string
}

export default function CalltoActionThreeColumn({
    content,
    backgroundStyles,
    buttonLink,
    secondaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonStyle,
    secondaryButtonText,
    paddingTop,
    paddingBottom,
    image,
    altText,
    blurData,
}: Props) {

    const primaryButtonLinking =
        (buttonLink?.internalLink?._type === "pages" && `/${buttonLink?.internalLink.slug}`) ||
        (buttonLink?.internalLink?._type === "blog" && `/blog/${buttonLink?.internalLink.slug}`) ||
        (buttonLink?.internalLink?._type === "legal" && `/legal/${buttonLink?.internalLink.slug}`) ||
        (buttonLink?.internalLink?._type === "services" && `/services/${buttonLink?.internalLink.slug}`) ||
        (buttonLink?.internalLink?._type === "team" && `/team/${buttonLink?.internalLink.slug}`) ||
        (buttonLink?.externalUrl && `${buttonLink?.externalUrl}`)

    const secondaryButtonLinking =
        (secondaryButtonLink?.internalLink?._type === "pages" && `/${secondaryButtonLink?.internalLink.slug}`) ||
        (secondaryButtonLink?.internalLink?._type === "blog" && `/blog/${secondaryButtonLink?.internalLink.slug}`) ||
        (secondaryButtonLink?.internalLink?._type === "legal" && `/legal/${secondaryButtonLink?.internalLink.slug}`) ||
        (secondaryButtonLink?.internalLink?._type === "services" && `/services/${secondaryButtonLink?.internalLink.slug}`) ||
        (secondaryButtonLink?.internalLink?._type === "team" && `/team/${secondaryButtonLink?.internalLink.slug}`) ||
        (secondaryButtonLink?.externalUrl && `${buttonLink?.externalUrl}`)

    const styles = {
        paddingTop: paddingTop ?? '5rem',
        paddingBottom: paddingBottom ?? '5rem',
        borderBottom: '8px solid #bf9283'
    }

    const allStyles = { ...backgroundStyles, ...styles }

    return (
        <div style={allStyles}>
            <div className="lg:px-20 md:px-10 px-4 md:flex items-center">
                <div className="w-60 mx-auto">
                    {image &&
                        <Image
                            src={image}
                            alt={altText}
                            placeholder={blurData ? 'blur' : 'empty'}
                            blurDataURL={blurData}
                            width={600}
                            height={200}
                            className="object-contain"
                        />
                    }
                </div>
                <div className="content grow text-center md:mt-0 mt-10">
                    {content &&
                        <ContentEditor
                            content={content}
                        />
                    }
                </div>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 w-48 md:place-content-end place-content-center mx-auto">
                    <a href="#inquire" className="secondary-button !text-xl">Inquire</a>
                </div>
            </div>
        </div>
    )
}