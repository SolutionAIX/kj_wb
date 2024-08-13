const TutorialCard = () => {
    return (
        <>
            <div className="w-full rounded-xl" style={{
                background: `
          radial-gradient(100.99% 100.73% at 0% 0%, rgba(0,196,204,.726) 0%, #00c4cc 0.01%, rgba(0,196,204,0) 100%),
          radial-gradient(68.47% 129.02% at 22.82% 97.71%, #6420ff 0%, rgba(100,32,255,0) 100%),
          radial-gradient(106.1% 249.18% at 0% 0%, #00c4cc 0%, rgba(0,196,204,0) 100%),
          radial-gradient(64.14% 115.13% at 5.49% 50%, #6420ff 0%, rgba(100,32,255,0) 100%),
          #7d2ae7
        `
            }}>
                {/* <img
                    className="absolute h-full w-full object-cover"
                    src="https://raw.githubusercontent.com/Alisherka7/devops/main/Kubernetes/images/head.jpg"
                    alt="Kubernetes"
                /> */}
                <div className="text-white lg:w-1/2 relative">
                    <div className=" p-5 opacity-90 lg:p-12">
                        <p className="mb-4 font-serif font-light">August 03, 2022</p>
                        <h2 className="font-serif text-4xl font-bold">Complete modern Kubernetes</h2>
                        <a
                            href="#"
                            className="mt-6 inline-block rounded-xl border-2 px-10 py-3 font-semibold border-white hover:bg-white hover:text-blue-600"
                        >
                            Read Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TutorialCard;