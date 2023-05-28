import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Stack
} from '@chakra-ui/react'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { MdDriveFileRenameOutline } from 'react-icons/md'

const InputForOrder = ({ inputDataAll, setInputDataAll }) => {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <MdDriveFileRenameOutline size={20} />
        </InputLeftElement>
        <Input
          placeholder="Name"
          value={inputDataAll.name}
          onChange={(e) =>
            setInputDataAll({
              ...inputDataAll,
              name: e.target.value
            })
          }
        />
      </InputGroup>

      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <AiOutlineMail size={20} />
        </InputLeftElement>
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
      </InputGroup>

      <InputGroup>
        <InputLeftAddon children="+380" />
        <InputLeftElement pointerEvents="none" />
        <Input
          type="tel"
          placeholder="Phone number"
          value={inputDataAll.number}
          onChange={(e) =>
            setInputDataAll({
              ...inputDataAll,
              number: e.target.value
            })
          }
        />
      </InputGroup>

      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <AiOutlineHome size={20} />
        </InputLeftElement>
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
      </InputGroup>
    </Stack>
  )
}

export default InputForOrder
