import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { alertActions } from '../../../store/alertSlice';
import { useDispatch } from 'react-redux';
import baseUrl from '../../../libs/axios/basicAxios';
import Modal from '../../common/Modal';
import Button from '../../common/Button';
import DropDown from '../../common/DropDown';

const ChooseUser = ({ onClose, onChange, onNext }) => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.auth.userInfo);
  const [groups, setGroups] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedGroupLabel, setSelectedGroupLabel] = useState('그룹 선택');
  const [selectedUserLabel, setSelectedUserLabel] = useState('유저 선택');

  useEffect(() => {
    const getGroups = async () => {
      let allGroups = [];
      try {
        const response = await baseUrl.get('/wooms?page=0', {
          withCredentials: true,
        });
        console.log(response.data);

        for (let i = 0; i < response.data.totalPages; i++) {
          const response = await baseUrl.get(`/wooms?page=${i}`, {
            withCredentials: true,
          });
          allGroups = [...allGroups, ...response.data.content];
        }
        setGroups(allGroups);
        console.log(allGroups);
      } catch (error) {
        console.error('그룹 정보 불러오기 실패', error);
        dispatch(
          alertActions.showAlert({
            message: error.response.data.message,
            type: 'ERROR',
          })
        );
      }
    };

    getGroups();
  }, []);

  const handleGroupSelect = async (option) => {
    const groupId = option.value;
    const groupTitle = option.label;

    setSelectedGroup(groupId);
    setSelectedGroupLabel(groupTitle);

    if (groupId) {
      try {
        const response = await baseUrl.get(`/wooms/${groupId}/info`, {
          withCredentials: true,
        });
        console.log(response.data.userInfoDtoList);
        setUsers(
          response.data.userInfoDtoList.filter(
            (user) => user.uuid !== userInfo.userUuid
          )
        );
      } catch (error) {
        console.error('그룹 속한 유저 정보 불러오기 실패', error);
        dispatch(
          alertActions.showAlert({
            message: error.response.data.message,
            type: 'ERROR',
          })
        );
      }
    } else {
      setUsers([]);
    }
  };

  const handleUserSelect = (option) => {
    const selectedUserUuid = option.value;
    const selectedUser = users.find((user) => user.uuid === selectedUserUuid);

    setSelectedUserLabel(option.label);
    onChange(selectedUser);
  };

  const groupOptions = groups.map((group) => ({
    label: group.woomsTitle,
    value: group.woomsId,
  }));

  const userOptions = users.map((user) => ({
    label: user.nickname,
    value: user.uuid,
  }));

  return (
    <Modal onClose={onClose}>
      <section className='flex flex-col h-5/6 justify-between text-center'>
        <h1 className='text-4xl text-center mt-4 text-point-color'>
          누구에게 편지를 쓸까요?
        </h1>
        <div className='flex items-center justify-center space-x-4 mt-4 text-point-color'>
          <div className='w-1/3 flex justify-center'>
            <DropDown
              options={groupOptions}
              placeholder={selectedGroupLabel}
              onSelect={handleGroupSelect}
            />
          </div>
          <div className='w-1/3 flex justify-center'>
            <DropDown
              options={userOptions}
              placeholder={selectedUserLabel}
              onSelect={handleUserSelect}
            />
          </div>
        </div>
        <div className='relative w-full flex justify-center'>
          {!groups.length && (
            <p className='absolute text-center text-2xl'>
              가입된 그룹이 없어요!
            </p>
          )}
        </div>
        <div className='flex justify-center mt-8'>
          <Button
            label={'편지 쓰기'}
            onClick={onNext}
            disabled={
              selectedGroupLabel === '그룹 선택' ||
              selectedUserLabel === '유저 선택'
            }
          />
        </div>
      </section>
    </Modal>
  );
};

export default ChooseUser;
