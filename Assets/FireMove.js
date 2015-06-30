#pragma strict

function Start () {

}

function Update () {

	transform.Rotate(Vector3.up * Time.deltaTime*Input.GetAxis("Mouse X")*100,Space.Self);
	/*if(Input.GetKey(KeyCode.Q))
		transform.Rotate(Vector3.up * Time.deltaTime*(-100),Space.Self);
	if(Input.GetKey(KeyCode.E))
		transform.Rotate(Vector3.up * Time.deltaTime*(100),Space.Self);*/
}