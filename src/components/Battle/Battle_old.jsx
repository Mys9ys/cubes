import React from "react";
import css from './Battle.module.css';
import cn from "classnames";

const Battle = (props) => {
    return (
        <div className={css.battleWrapper}>
            <div className={cn(css.warrior_box,css.warrior1, css.left)}>
                <div className={css.cube_table}></div>
                <div className={css.panel_box}>
                    <div className={css.effect_box}></div>
                    <div className={css.warrior_img}>

                    </div>
                    <div className={css.bar_block}>
                        <div className={cn(css.mana_bar, css.left)}>
                            <div className={css.mana_bar_fill}></div>
                            <div className={css.mana_bar_text}></div>
                        </div>
                        <div className={cn(css.HP_bar, css.right)}>
                            <div className={css.HP_bar_fill}></div>
                            <div className={css.HP_bar_text}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(css.battle_info_box, css.left)}>
                <div className={css.battleStart}>В бой</div>
            </div>
            <div className={cn(css.warrior_box, css.warrior2, css.right)}>
                <div className={css.cube_table}></div>
                <div className={css.panel_box}>
                    <div className={css.effect_box}></div>
                    <div className={css.warrior_img}>
                    </div>
                    <div className={css.bar_block}>
                        <div className={cn(css.mana_bar, css.left)}>
                            <div className={css.mana_bar_fill}></div>
                            <div className={css.mana_bar_text}></div>
                        </div>
                        <div className={cn(css.HP_bar, css.left)}>
                            <div className={css.HP_bar_fill}></div>
                            <div className={css.HP_bar_text}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Battle;