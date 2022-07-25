import classNames from "classnames";
import Container from "../../../components/Container";
import PageMeta from "../../PageMeta";

import styles from "./styles.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  description: string;
  title: string;
  url: string;
}

export default function MainLayout({ children, description, title, url }: LayoutProps) {
  return (
    <>
      <PageMeta title={title} description={description} url={url} />
      <main className={styles.wrapper}>
        <p className={styles.title}>Current Token Price</p>
        <Container>{children}</Container>
      </main>
    </>
  );
}
