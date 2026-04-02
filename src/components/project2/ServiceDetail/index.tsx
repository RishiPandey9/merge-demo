"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import HeroSub from "@/components/project2/SharedComponent/HeroSub";
import UsedTech from "@/components/project2/Services/Technologies";
import ServiceDetailSkeleton from "../Skeleton/ServiceDetail/page";

const ServiceDetail = () => {
    const [services, setServices] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/project2/service')
                if (!res.ok) throw new Error('Failed to fetch')

                const data = await res.json()
                setServices(data.ServicesData || [])
            } catch (error) {
                setHasError(true)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])
    const { slug } = useParams();
    const item = services.find((item) => item.slug === slug);
    const breadcrumbLinks = [
        { href: "/project2/services", text: "Service" },
        { href: "/project2/services", text: "Services Detail" },
    ];

    if (isLoading) {
        return (
            <ServiceDetailSkeleton />
        );
    }

    if (hasError || !item) {
        return (
            <>
                <HeroSub
                    title="Service Not Found"
                    description="The requested service was not found or could not be loaded."
                    breadcrumbLinks={breadcrumbLinks}
                />
                <section className="dark:bg-darkmode pb-20">
                    <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4 text-center">
                        <p className="text-xl text-black/60 dark:text-white/60 mb-6">
                            Please check the URL or browse available services.
                        </p>
                        <Link href="/project2/services" className="inline-flex rounded-lg bg-primary px-6 py-3 text-white hover:bg-orange-600">
                            Back to Services
                        </Link>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <HeroSub
                title={item.title}
                description={item.description}
                breadcrumbLinks={breadcrumbLinks}
            />
            <section className="dark:bg-darkmode">
                <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
                    <div className="grid lg:grid-cols-2 items-center">
                        <div className="mx-auto">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={480}
                                height={480}
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold md:text-5xl text-32 text-black dark:text-white lg:text-start text-center mb-4">
                                What It <span className="text-primary">Does</span>
                            </h3>
                            <p className="text-xl text-black/50 dark:text-white/50">
                                {item.detail}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-grey dark:bg-darklight">
                <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
                    <h4 className="font-semibold md:text-40 text-32 text-black dark:text-white lg:text-start text-center">
                        Features
                    </h4>
                    <ul className="mt-4 text-xl">
                        {item.features.map((feature: any, index: any) => (
                            <li
                                key={index}
                                className="my-3"
                            >
                                <div className="flex items-start sm:gap-5 gap-3">
                                    <div>
                                        <Icon
                                            icon="solar:check-circle-linear"
                                            width="18"
                                            height="18"
                                            className="font-semibold text-primary mt-2 w-4 h-4"
                                        />
                                    </div>
                                    <p className="text-xl text-black/50 dark:text-white/50">
                                        <span className="font-medium text-black dark:text-white">
                                            {feature.title}:
                                        </span>{" "}
                                        {feature.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <UsedTech />
        </>
    );
};

export default ServiceDetail;