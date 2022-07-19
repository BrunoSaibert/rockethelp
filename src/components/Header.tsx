import {
  Heading,
  HStack,
  IconButton,
  StyledProps,
  useTheme,
} from "native-base";
import { CaretLeft } from "phosphor-react-native";

type HeaderProps = StyledProps & {
  title: string;
};

export function Header({ title, ...rest }: HeaderProps) {
  const { colors } = useTheme();

  return (
    <HStack
      w="full"
      alignItems="center"
      justifyContent="space-between"
      bg="gray.600"
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton icon={<CaretLeft size={24} color={colors.gray[200]} />} />

      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        ml={-6}
      >
        {title}
      </Heading>
    </HStack>
  );
}
