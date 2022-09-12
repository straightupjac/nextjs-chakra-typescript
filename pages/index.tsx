import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Text as='h1' className={styles.title}>
          NextJS + Chakra + Typescript Starter
        </Text>
        <Text className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </Text>
        <Link href='/components'>
          <Text className={styles.description}>
            Components <code className={styles.code}>pages/components.tsx</code>
          </Text>
        </Link>
      </main>
    </div>
  );
};

export default Home;
