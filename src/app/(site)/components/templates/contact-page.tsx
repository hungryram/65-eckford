'use client'
import ContentEditor from '../util/content-editor';
import FormBuilder from './form-builder';
import Image from 'next/image';

interface Props {
    image: string;
    altText: string;
    blurData: string;
    email: string;
    phone_number: string;
    office_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    emailAlerts: string;
    sendFrom: string;
    emailBcc: string;
    emailCc: string;
    formBuilder: any;
    backgroundStyles: any
    // SOCIAL
    facebook: any;
    youtube: any;
    instagram: any;
    twitter: any;
    reddit: any;
    linkedin: any;
    yelp: any;
    pinterest: any;
    tiktok: any;
    zillow: any;
    hideContact: any;
    content: any;
    id: string;
    paddingTop: string;
    paddingBottom: string;
    oneColumn: boolean;
}

export default function ContactPage({
    formBuilder,
    backgroundStyles,
    image,
    altText,
    blurData,
    content,
    id,
    paddingTop,
    paddingBottom,
    oneColumn
}: Props) {

    const styles = {
        paddingTop: paddingTop ?? '5rem',
        paddingBottom: paddingBottom ?? '5rem',
    }

    const allStyles = { ...backgroundStyles, ...styles }

    return (
        <div style={allStyles} id={'inquire'}>
            <div className="container">
                <div className="md:flex items-center justify-center">
                    {!oneColumn &&
                        <div className="md:w-1/2">
                            {image ?
                                <div className="relative">
                                    <Image
                                        src={image}
                                        alt={altText}
                                        placeholder={blurData ? 'blur' : 'empty'}
                                        blurDataURL={blurData}
                                        width={400}
                                        height={600}
                                        className="object-contain"
                                    />
                                </div>
                                : null
                            }
                        </div>
                    }
                    <div className={oneColumn ? '' : 'w-full'}>
                        <div>
                            <div className="md:p-10 p-4 bg-white">
                                <div className="content text-center mb-10">
                                    <ContentEditor content={content} />
                                </div>
                                <FormBuilder
                                    formSchema={formBuilder}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}