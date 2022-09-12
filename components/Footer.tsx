import { VStack, Text } from "@chakra-ui/react";
import styles from "@styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <VStack gap={2} textAlign="center">
        <Text>
          <a href="https://github.com/straightupjac" target="_blank" rel="noreferrer">straightupjac</a> &copy;{" "} {new Date().getFullYear()}
        </Text>
      </VStack>
    </footer>
  );
};

export default Footer;
