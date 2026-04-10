import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '80px', color: 'red', marginBottom: '10px' }}>
        404
      </h1>
      <h2 style={{ marginBottom: '10px' }}>Page Not Found</h2>
      <p style={{ marginBottom: '20px' }}>
        요청하신 페이지를 찾을 수 없습니다.
      </p>

      <Link
        to="/"
        style={{
          textDecoration: 'none',
          backgroundColor: 'red',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          fontWeight: 'bold',
        }}
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}

export default NotFoundPage