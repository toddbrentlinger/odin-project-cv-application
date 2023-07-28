import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Thumbnail from "./Thumbnail";

const defaultInfo = {
    name: "Indiana Jones",
    title: "Archaeologist-Adventurer",
    email: "henryjonesjr@princeton.edu",
    phone: "(609) 258-0103",
    location: "Princeton, New Jersey",
};

const defaultThumbnail = {
    url: "https://theenchantedmanor.com/wp-content/uploads/2016/06/Professor-Henry-Jones-Jr.jpg",
    size: 110,
    posX: 0,
    posY: 0,
};

function GeneralInfoSection() {
    const [info, setInfo] = useState(defaultInfo);
    const [thumbnail, setThumbnail] = useState(defaultThumbnail);

    const handleEditSubmit = (e) => {
        e.preventDefault();

        const newState = {
            name: e.target.elements.name.value,
            title: e.target.elements.title.value,
            email: e.target.elements.email.value,
            phone: e.target.elements.phone.value,
            location: e.target.elements.location.value,
        };

        setInfo(newState);
    };

    const handleThumbnailEditSubmit = (e) => {
        e.preventDefault();

        setThumbnail({
            url: e.target.elements.imageUrl.value,
            size: Number(e.target.elements.size.value),
            posX: Number(e.target.elements.posX.value),
            posY: Number(e.target.elements.posY.value),
        });
    };

    return (
        <article id="general-info-section">
            <Thumbnail
                imageUrl={thumbnail.url}
                size={thumbnail.size}
                posX={thumbnail.posX}
                posY={thumbnail.posY}
                handleEditSubmit={handleThumbnailEditSubmit}
            />
            <GeneralInfo
                name={info.name}
                title={info.title}
                email={info.email}
                phone={info.phone}
                location={info.location}
                handleEditSubmit={handleEditSubmit}
            />
        </article>
    );
}

export default GeneralInfoSection;
