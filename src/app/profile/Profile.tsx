import { RootState } from "@/lib/store/useAuth";
import { useSelector } from "react-redux";

const Profile = () => {
    const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
    
    if (!isLoggedIn || !user) {
        return null; // or some kind of redirection or error message
    }

    return (
        <div className="flex items-center justify-center">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3 shadow">
                        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img src={user.profile_image || 'default_profile_img_url'} alt="Profile" className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full mb-4"/>
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                    <a href="#" className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 py-2 px-4 rounded">Resume</a>
                                </div>
                            </div>
                            <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                                vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                                et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                                luctus risus rhoncus id.
                            </p>
                            <h3 className="font-semibold text-center mt-3 -mb-2 text-gray-900 dark:text-white">
                                Find me on
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
