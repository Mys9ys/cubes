import React from "react";
import css from './Battle.module.css';
import cn from "classnames";
import warrior_avatar from "../../assets/image/300warrior.jpg";

const Battle = (props) => {
    return (
        <div className={css.battle_wrapper}>
            <div className={css.warrior_box}>
                <div className={css.warrior_avatar_box}>
                    <img src={warrior_avatar} alt=""/>
                </div>
            </div>
        </div>
    )
};

export default Battle;