export const revalidateData = async () => {
  try {
    const response = await fetch('/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error('Ошибка при обновлении данных')
    }
    return true
  } catch (error) {
    console.error('Ошибка revalidate:', error)
    return false
  }
}
