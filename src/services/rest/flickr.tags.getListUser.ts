/**
 * This file was auto-generated on 2023-10-20T16:36:46.802Z
 * flickr.tags.getListUser
 * Get the tag list for a given user (or the currently logged in user).
 */
export interface FlickrTagsGetListUserParams {
  /**
   * The NSID of the user to fetch the tag list for. If this argument is not specified, the currently logged in user (if any) is assumed.
   */
  user_id?: string
}