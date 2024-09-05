import { urlForImage } from "../../../../../sanity/lib/image"
import Styles from './availability.module.css'
import { TfiDownload } from "react-icons/tfi";
import HeaderSection from "./header-section"


const BedroomLayout = ({ bedroom, availabilities, customClass }: { bedroom: string, availabilities: any, customClass?: string }) => {
    return (
        <>
            <div className={`grid grid-cols-9 gap-4 border-gray-400 border-b ${customClass}`}>
                <div className={`bg-[#D1D3D5] col-span-9 text-left font-semibold text-black py-5 pl-8`}>
                    <h3 className={Styles.bedroomHeading}>{bedroom === "studio" ? 'Studio' : bedroom + " Bedroom"}</h3>
                </div>
            </div>
            {availabilities?.avail?.map((node: any) => (
                (node?.bed === bedroom) && (
                    <div key={node.residence} className="grid grid-cols-9 text-center py-4 border-b border-[#D4A066]">
                        <div className="col-span-1">{node.residence}</div>
                        <div className="col-span-1">{node.bath ? node?.bath : '—'}</div>
                        <div className="col-span-1">{node.sf ? node?.sf : '—'}</div>
                        <div className="col-span-1">{node.price ? node?.price : '—'}</div>
                        <div className="col-span-1">{node.exposure ? node?.exposure : '—'}</div>
                        <div className="col-span-1">{node.cc ? node?.cc : '—'}</div>
                        <div className="col-span-1">{node.retax ? node?.retax : '—'}</div>
                        <div className="col-span-1">{node.status ? node?.status : '—'}</div>
                        <div className="col-span-1 flex justify-center">
                            {node?.image ?
                                <a href={urlForImage(node?.image).url()} target="_blank">
                                    <span className="sr-only">View floor plan for {node?.residence}</span>
                                    <TfiDownload className="text-xl text-[#5A5D63]" />
                                </a>
                                :
                                <span>—<span className="sr-only">No floor plans available for {node?.residence}</span></span>
                            }
                        </div>
                    </div>
                )
            ))}
        </>
    );
};

export default function AvailabilityTable({
    availabilities,
    Bath,
    intExtSf,
    exposure,
    price,
    cc,
    retax,
    listingStatus,
    viewListing,
    file,
    image,
    residence,
    factSheet,
    organizedLayout,
    backgroundStyles,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    textAlign,
    content
}: any) {

    return (
        <div className="section">
            <div className="container text-center">
                {(content || primaryButtonLink || secondaryButtonLink) && (
                    <HeaderSection
                        content={content}
                        textAlign={textAlign}
                        buttonLink={primaryButtonLink}
                        primaryButtonText={primaryButtonText}
                        primaryButtonStyle={primaryButtonStyle}
                        secondaryButtonLink={secondaryButtonLink}
                        secondaryButtonText={secondaryButtonText}
                        secondaryButtonStyle={secondaryButtonStyle}
                    />
                )}
                <div className="container lg:block hidden">
                    {factSheet &&
                        <div className="my-10 uppercase text-2xl italic underline">
                            <a href={factSheet} target="_blank">View Fact Sheet</a>
                        </div>
                    }
                    <div className="grid grid-cols-9 gap-4 bg-[#34383C] text-white mt-20 md:px-4 px-4 items-center">
                        <div className={`col-span-1 ${Styles.availabilityHeading}`}>
                            <h4 className="text-xl uppercase">Residence</h4>
                        </div>
                        <div className={`col-span-1 ${Styles.availabilityHeading}`}>
                            <h4 className="text-xl uppercase">Bathrooms</h4>
                        </div>
                        <div className={`col-span-1 ${Styles.availabilityHeading}`}>
                            <h4 className="text-xl uppercase">Int/Ext SF</h4>
                        </div>
                        <div className={`col-span-1 ${Styles.availabilityHeading}`}>
                            <h4 className="text-xl uppercase">Price</h4>
                        </div>
                        <div className={`col-span-1 ${Styles.availabilityHeading}`}>
                            <h4 className="text-xl uppercase">Exposure</h4>
                        </div>
                        <div className={`col-span-1 ${Styles.availabilityHeading}`}>
                            <h4 className="text-xl uppercase">Monthly CC</h4>
                        </div>
                        <div className={`col-span-1 ${Styles.availabilityHeading}`}>
                            <h4 className="text-xl uppercase">Monthly Taxes</h4>
                        </div>
                        <div className={`col-span-1 ${Styles.availabilityHeading}`}>
                            <h4 className="text-xl uppercase">Status</h4>
                        </div>
                        <div className={`col-span-1 ${Styles.availabilityHeading}`}>
                            <h4 className="text-xl uppercase">Floor Plan</h4>
                        </div>
                    </div>
                    <BedroomLayout bedroom="studio" availabilities={availabilities} />
                    <BedroomLayout bedroom="1" availabilities={availabilities} customClass="pt-20" />
                    <BedroomLayout bedroom="2" availabilities={availabilities} customClass="pt-20" />
                </div>

                <div className="container lg:hidden mt-10">
                    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-x-8">
                        {availabilities?.avail?.map((node: any) => (
                            <li key={node._key} className="overflow-hidden rounded-sm border border-[#D4A066]">
                                <div className="flex items-center gap-x-4 bg-[#D1D3D5] p-6">
                                    <div className="font-extrabold leading-6 text-gray-900 text-left flex-1">{node?.residence}</div>
                                    <div className="justify-end">{node?.bed === "studio" ? 'Studio' : ` ${node.bed}-bedroom`}</div>
                                </div>
                                <dl className="-my-3 divide-y px-6 py-4 leading-6">
                                    <div className="flex justify-between gap-x-4 py-1">
                                        <dt className={Styles.tableData}>Price</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.price ? node?.price : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-1">
                                        <dt className={Styles.tableData}>Bathrooms</dt>
                                        <dd className="text-gray-700">
                                            <span>{node?.bath ? node?.bath : '—'}</span>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-1">
                                        <dt className={Styles.tableData}>Int/Ext SF</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.intExtSf ? node?.intExtSf : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-1">
                                        <dt className={Styles.tableData}>Exposure</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.exposure ? node?.exposure : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-1">
                                        <dt className={Styles.tableData}>Monthly Taxes</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.retax ? node?.retax : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-1">
                                        <dt className={Styles.tableData}>Status</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.status ? node?.status : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-1">
                                        <dt className={Styles.tableData}>Monthly CC</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.cc ? node?.cc : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-1">
                                        <dt className={Styles.tableData}>View Floor Plan</dt>
                                        <dd className="flex items-center gap-x-2">
                                            {node?.image ?
                                                <a href={urlForImage(node?.image).url()} target="_blank">
                                                    <span className="sr-only">View floor plan for {node?.residence}</span>
                                                    <TfiDownload className="text-xl text-[#5A5D63]" />
                                                </a>
                                                :
                                                <span>—<span className="sr-only">No floor plans available for {node?.residence}</span></span>
                                            }                                            </dd>
                                    </div>
                                </dl>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}