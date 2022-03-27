import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <>
            <div className="create-new-tuit-placememnt">
                <img src="../JonathanMa.JPG" class="wd-bookmark-profile-pic" alt="" />
                <textarea value={whatsHappening}
                    onChange={(event) =>
                        setWhatsHappening(event.target.value)}
                    placeholder="What's happening"
                    className="new-tuit_box">
                </textarea>
            </div>
            <div className="new-tuit-button-placement">
                <button onClick={tuitClickHandler}
                    className="new-tuit-button">
                    Tuit
                </button>
            </div>
        </>
    );
}
export default WhatsHappening;