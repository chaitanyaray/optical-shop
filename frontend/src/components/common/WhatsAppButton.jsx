import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "919999999999"; // Replace with shop number

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=Hi%20I%20am%20interested%20in%20your%20eyewear%20collection`}
            target="_blank"
            rel="noopener noreferrer"
            className="
      fixed
      bottom-5
      right-5
      z-[999]
      bg-green-500
      hover:bg-green-600
      text-white
      w-16
      h-16
      rounded-full
      flex
      items-center
      justify-center
      shadow-2xl
      transition
      duration-300
      hover:scale-110
      "
        >
            <FaWhatsapp size={34} />
        </a>
    );
};

export default WhatsAppButton;