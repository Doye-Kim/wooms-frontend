import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import MainPage from '../src/MainPage';
import { vi } from 'vitest';

// react-router-dom의 useNavigate를 Mock 처리
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('MainPage', () => {
  let mockNavigate;

  beforeEach(() => {
    mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);
  });

  // renderMainPage 함수로 렌더링 중복을 제거
  const renderMainPage = () =>
    render(
      <Router>
        <MainPage />
      </Router>
    );

  test('렌더링 확인', () => {
    renderMainPage();

    expect(screen.getByText('회원가입')).toBeInTheDocument();
    expect(screen.getByText('로그인')).toBeInTheDocument();
    expect(screen.getByAltText('imgLogo')).toBeInTheDocument();
  });

  test('회원가입 버튼 클릭 시 페이지 이동', () => {
    renderMainPage();

    const signupButton = screen.getByText('회원가입');
    fireEvent.click(signupButton);

    expect(mockNavigate).toHaveBeenCalledWith('/signup'); // 회원가입 버튼 클릭 후 로그인 페이지로 이동
  });

  test('로그인 버튼 클릭 시 페이지 이동', () => {
    renderMainPage();

    const loginButton = screen.getByText('로그인');
    fireEvent.click(loginButton);

    expect(mockNavigate).toHaveBeenCalledWith('/login'); // 로그인 버튼 클릭 후 로그인 페이지로 이동
  });
});
