import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'

const InputForOrder = ({ inputDataAll, setInputDataAll, isError }) => {
  return (
    <Stack spacing={4}>
      <FormControl isRequired isInvalid={!isError}>
        <FormLabel>First name</FormLabel>
        <Input
          placeholder="First name"
          value={inputDataAll.name}
          onChange={(e) =>
            setInputDataAll({
              ...inputDataAll,
              name: e.target.value
            })
          }
        />
      </FormControl>

      <FormControl isRequired isInvalid={!isError}>
        <FormLabel>E-mail</FormLabel>
        <Input
          placeholder="E-mail"
          value={inputDataAll.email}
          onChange={(e) =>
            setInputDataAll({
              ...inputDataAll,
              email: e.target.value
            })
          }
        />
      </FormControl>

      <FormControl isRequired isInvalid={!isError}>
        <FormLabel>Number</FormLabel>
        <Input
          placeholder="Number"
          value={inputDataAll.number}
          onChange={(e) =>
            setInputDataAll({
              ...inputDataAll,
              number: e.target.value
            })
          }
        />
      </FormControl>

      <FormControl isRequired isInvalid={!isError}>
        <FormLabel>Address</FormLabel>
        <Input
          placeholder="Address"
          value={inputDataAll.address}
          onChange={(e) =>
            setInputDataAll({
              ...inputDataAll,
              address: e.target.value
            })
          }
        />
      </FormControl>
    </Stack>
  )
}

export default InputForOrder
