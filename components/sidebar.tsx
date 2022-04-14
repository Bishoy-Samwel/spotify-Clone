import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/Search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
];

const Sidebar = () => {
  return (
    // Main Box
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      {/* Container Box */}
      <Box paddingY="20px" height="100%">
        {/* Logo Box */}
        <Box width="120px" marginBottom="20px" paddingX="20">
          <NextImage src="/logo.png" height={60} width={120} />
        </Box>
        {/* Menu Box */}
        <Box marginBottom="20px">
          {/* NavMenu List */}
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
          <Divider marginY="20px" color="grey.800" />
          {/* MusicMenu List */}
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider marginY="20px" color="grey.800" />
        {/* Playlist Box */}
        <Box height="60%" overflowY="auto" paddingY="20px">
          {new Array(50).fill(1).map(() => (
            <h1>Hey</h1>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
