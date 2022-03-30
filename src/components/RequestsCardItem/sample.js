const SampleRequestCard = props => {
  const {request, onApproving} = props
  const {postId} = request

  const sampleApproving = () => {
    onApproving(postId)
  }

  return <button onClick={sampleApproving}>Approve</button>
}

export default SampleRequestCard
