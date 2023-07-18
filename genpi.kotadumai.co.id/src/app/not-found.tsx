import React from "react";
import UnstyledLink from "../../component/links/UnstyledLink";
import styles from "../../component/styles/notFound.module.css";

export default function notFound() {
  return (
    <div className={styles.errorPage}>
      <div className={styles.content}>
        <h2 className={styles.header} data-text="404">
          404
        </h2>
        <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
        <p>
          Sorry, the page you&apos;re looking for doesn&apos;t exist. If you
          think something is broken, report a problem.
        </p>
        <div className={styles.btns}>
          <UnstyledLink href={"/"}>Back Home</UnstyledLink>
        </div>
      </div>
    </div>
  );
}
