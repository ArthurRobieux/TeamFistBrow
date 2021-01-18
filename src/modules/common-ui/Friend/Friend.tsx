import React from "react";
import { FriendType } from "./types";

import styles from "./styles.module.scss";

type FriendProps = { friend: FriendType };

export const Friend = ({ friend }: FriendProps) => {
  return (
    <div className={styles.friend}>
      <div>{friend.firstName}</div>
      <div>{friend.lastName}</div>
    </div>
  );
};
